import { DocWordIcon, PdfIcon, TxtIcon } from "../../../assets/svgs"
import { FileType } from "../../interfaceTypes"

export const getFileIcon = (fileName?: string) => {
  if (fileName) {
    const fileType = fileName?.split('.').pop()

    switch (fileType) {
      case FileType.Text:
        return <TxtIcon />

      case FileType.Pdf:
        return <PdfIcon />

      case FileType.Doc:
        return <DocWordIcon />

      default:
        return <></>
    }
  }
}