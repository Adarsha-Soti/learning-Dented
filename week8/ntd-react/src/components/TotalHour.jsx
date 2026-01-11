
const TotalHour = ({totalHours}) => {
  return (
    <div className="row">
      <div className="col">
        <div className="alert alert-primary" role="alert">
          Total Hours: {
            totalHours
          } hr
        </div>
      </div>
    </div>
  );
};

export default TotalHour;
