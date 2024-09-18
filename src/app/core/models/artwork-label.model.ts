export interface ArtworkLabel {
  picUrl: string,
  frameStyle: string,
  content: {
    title: string,
    title2?: string, subTitle: string,
    description: string
  },
  isRecTemplate?:boolean,
  previewPic: {
    width?: string,
    height?: string
  }
}
