import React from "react";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AvatarUpload } from ".";

describe("AvatarUpload", () => {
  it("Should render component", () => {
    const { getByText } = render(<AvatarUpload action={() => {}} />);

    const textElement = getByText(/Organization logo/i);

    expect(textElement).toBeInTheDocument();
  });

  it("Should not drag'n drop image that the image does not accept", async () => {
    const { getByTestId, findByText } = render(
      <AvatarUpload action={() => {}} />
    );

    window.URL.createObjectURL = jest.fn().mockImplementation(() => "url");

    const inputElement = getByTestId("drop-input");

    const file = new File(["file"], "ping.json", {
      type: "application/json",
    });

    Object.defineProperty(inputElement, "files", {
      value: [file],
    });

    fireEvent.drop(inputElement);
    expect(await findByText("Sorry, the upload failed.")).toBeInTheDocument();
  });

  it("Should drag'n drop image", async () => {
    const { getByTestId } = render(<AvatarUpload action={() => {}} />);

    const inputEl = getByTestId("drop-input");

    const file = new File(["file"], "test-image.png", {
      type: "image/png",
    });

    Object.defineProperty(inputEl, "files", {
      value: [file],
    });

    fireEvent.drop(inputEl);

    expect(await screen.findByText("Crop")).toBeInTheDocument();
  });

  it("Should drag'n drop image and close", async () => {
    const { getByTestId, getByText } = render(
      <AvatarUpload action={() => {}} />
    );

    const inputEl = getByTestId("drop-input");

    const file = new File(["file"], "test-image.png", {
      type: "image/png",
    });

    Object.defineProperty(inputEl, "files", {
      value: [file],
    });

    fireEvent.drop(inputEl);

    const closeElement = await screen.findByTestId("close-process-div");

    fireEvent.click(closeElement);

    const textElement = getByText(/Organization logo/i);

    expect(textElement).toBeInTheDocument();
  });

  // it("Should save image", async () => {
  //   const { getByTestId, findByText } = render(
  //     <AvatarUpload action={() => {}} />
  //   );

  //   const inputElement = getByTestId("drop-input");

  //   const file = new File(["file"], "test-image.png", {
  //     type: "image/png",
  //   });

  //   Object.defineProperty(inputElement, "files", {
  //     value: [file],
  //   });

  //   await waitFor(() => fireEvent.drop(inputElement));

  //   const savedButton = await findByText("Save");

  //   fireEvent.click(savedButton);

  //   expect(await findByText("Crop")).toBeInTheDocument();
  // });
});
