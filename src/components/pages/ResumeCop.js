import React from "react";

function ResumeCop() {
  return (
    <div className="bg-dark min-vh-100 text-white text-center">
      <a
        className="btn btn-lg btn-success w-100"
        download={true}
        href="./imgs/JacobWeinrich-Resume.pdf"
      >
        Download Resume
      </a>
      <iframe
        title="Resume"
        src="./imgs/JacobWeinrich-Resume.pdf"
        frameborder="0"
        className="min-vh-100 w-100"
      ></iframe>
    </div>
  );
}

export default ResumeCop;
