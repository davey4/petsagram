// env variables here
const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;

const Uploader = (props) => {
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
