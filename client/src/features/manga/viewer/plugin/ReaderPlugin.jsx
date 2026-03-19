import Reader from "../core/component/reader/Reader";

import { createModule } from "yet-another-react-lightbox";

const ReaderModule = createModule("Reader", Reader);

export default function ReaderPlugin({ addSibling, contains }) {
  addSibling("controller", ReaderModule);
  console.log("Contains Reader Module:", contains("Reader"));
}
