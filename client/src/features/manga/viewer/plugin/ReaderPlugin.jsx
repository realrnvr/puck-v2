import Reader from "../core/component/reader/Reader";

import { createModule } from "yet-another-react-lightbox";

const ReaderModule = createModule("Reader", Reader);

export default function ReaderPlugin({ addSibling }) {
  addSibling("controller", ReaderModule);
}
