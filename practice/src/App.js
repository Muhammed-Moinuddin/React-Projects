import { ImageGallery } from "./components/ImageGallery";
import { ListPractice } from "./components/ListPractice";
import { ObjectPractice } from "./components/ObjectPractice";
import { Products } from "./components/Products";

function App() {
  return (
    <div>
      <Products/>
      <div>
      <ImageGallery/>
      <ObjectPractice/>
      </div>
      <ListPractice/>
    </div>
  );
}

export default App;
