import "./CourseCard.css";

function CourseCard({ headerTitle, headerBackground }) {
  return (
    <div>
      <div
        className="card-header"
        style={{
          background: "url(" + headerBackground + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span>Technical</span>
        <p>{headerTitle}</p>
      </div>
    </div>
  );
}

export default CourseCard;