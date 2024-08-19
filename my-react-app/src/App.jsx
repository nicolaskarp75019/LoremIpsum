import "./App.css";
import Title from "../../components/Title";
import Description from "../../components/Description";

const App = () => {
  return (
    <>
      <div className="presentation">
        <h1>Lorem</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          optio voluptas illo maxime. Ut, libero laboriosam. Adipisci explicabo
          maiores molestias, odit repellat eligendi cupiditate itaque sit cum.
          Facere, aliquid aperiam.
        </p>
      </div>
      <div className="presentation">
        <Title name="Lorem" />
        <Description
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          optio voluptas illo maxime. Ut, libero laboriosam. Adipisci explicabo
          maiores molestias, odit repellat eligendi cupiditate itaque sit cum.
          Facere, aliquid aperiam."
        />
      </div>
    </>
  );
};

export default App;
