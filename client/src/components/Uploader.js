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
      try {
        const url = await resultEvent.info.secure_url;
        if (url) {
          props.setImage(url);
        }
      } catch (err) {
        throw err;
      }
    }
  };

  return (
    <div className="uploader">
      <button onClick={() => widget.open()}>{props.text}</button>
    </div>
  );
};

export default Uploader;
