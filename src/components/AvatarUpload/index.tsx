import React, { ComponentPropsWithoutRef, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import type { Area, Point } from "react-easy-crop/types";
import { BiImage } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import type { GetCroppedImageReturn } from "../../@types/CroppedImage";
import { getCroppedImg } from "../../utils/cropImage";
import { RejectedFile } from "./RejectedFile";
import {
  AcceptedFileContent,
  AvatarContainer,
  CloseContainer,
  Container,
  AcceptedFileContainer,
  Content,
  ContentCroppedImage,
  CroppedImageContainer,
  Details,
} from "./styles";

type FileProps = {
  path: string;
  preview: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

type AvatarUploadProps = ComponentPropsWithoutRef<"div"> & {
  action(croppedImage: GetCroppedImageReturn): void;
};

export function AvatarUpload({ action, ...rest }: AvatarUploadProps) {
  const [fileImage, setFileImage] = useState<FileProps[]>([]);
  const [hasRejectedFile, setHasRejectedFile] = useState(false);

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImage, setCroppedImage] = useState<GetCroppedImageReturn>(
    {} as GetCroppedImageReturn
  );

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaInPixels: Area) => {
      setCroppedAreaPixels(croppedAreaInPixels);
    },
    []
  );

  const onDrop = useCallback((acceptedFiles: any[]) => {
    const objectFile = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setCroppedImage({} as GetCroppedImageReturn);
    setFileImage(objectFile);
    setZoom(1);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: [".png", ".jpg", ".jpeg"],
    multiple: false,
    onDrop,
    onDropRejected: (fileRejections) => {
      setHasRejectedFile(!!fileRejections.length);
    },
  });

  const handleTryAgain = () => {
    setHasRejectedFile(false);
    setFileImage([]);
    setCroppedImage({} as GetCroppedImageReturn);
  };

  const cropImage = async () => {
    try {
      if (!croppedAreaPixels) return;

      const croppedImg = await getCroppedImg({
        imageSrc: fileImage[0].preview,
        pixelCrop: croppedAreaPixels,
      });

      setCroppedImage(croppedImg);
      action(croppedImg);
    } catch (err) {
      console.log(err);
    }
  };

  if (!!fileImage.length && !!croppedImage.file) {
    return (
      <CroppedImageContainer
        isActive={isDragActive}
        {...getRootProps({ className: "dropzone" })}
      >
        <AvatarContainer>
          <Cropper
            image={fileImage[0].preview}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </AvatarContainer>

        <ContentCroppedImage>
          <div>
            <BiImage size="16" />

            <p>Organization Logo</p>
          </div>

          <p>Drop the image here or click to browse</p>

          <input {...getInputProps()} />
        </ContentCroppedImage>
      </CroppedImageContainer>
    );
  }

  if (fileImage.length) {
    return (
      <AcceptedFileContainer>
        <AcceptedFileContent>
          <AvatarContainer>
            <Cropper
              image={fileImage[0].preview}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </AvatarContainer>

          <Details>
            <div>
              <p>Crop</p>

              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(event) => setZoom(Number(event.target.value))}
                className="slider"
              />
            </div>

            <button type="button" onClick={cropImage}>
              Save
            </button>
          </Details>
        </AcceptedFileContent>

        <CloseContainer
          data-testid="close-process-div"
          onClick={handleTryAgain}
        >
          <IoClose size="24" color="#677489" />
        </CloseContainer>
      </AcceptedFileContainer>
    );
  }

  if (hasRejectedFile) {
    return <RejectedFile action={handleTryAgain} />;
  }

  return (
    <Container
      isActive={isDragActive}
      {...getRootProps({ className: "dropzone" })}
      {...rest}
    >
      <Content>
        <div>
          <BiImage size="16" />

          <p>Organization Logo</p>
        </div>

        <p>Drop the image here or click to browse</p>

        <input data-testid="drop-input" {...getInputProps()} />
      </Content>
    </Container>
  );
}
