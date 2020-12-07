// env variables here
const CLOUD_NAME = "davey4";
const UPLOAD_PRESET = "kstt8ubl";

const Uploader = (props) => {
  console.log(UPLOAD_PRESET);

  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: CLOUD_NAME,
      uploadPreset: UPLOAD_PRESET,
      multiple: false,
      resourceType: "image",
      maxFileSize: 1500000,
    },
    (error, result) => {
      checkUpload(result);
    }
  );

  const checkUpload = async (resultEvent) => {
    if (resultEvent.event === "success") {
      console.log("event", resultEvent);
      try {
        const url = await resultEvent.info.secure_url;
        if (url) {
          // await __UploadFile(url);
          await updateRender();
        }
      } catch (err) {
        throw err;
      }
    }
  };

  const updateRender = async () => {
    await props.setImage();
  };

  return (
    <div className="uploader">
      <button className="btn indigo darken-3" onClick={() => widget.open()}>
        Upload Image
      </button>
    </div>
  );
};

export default Uploader;
