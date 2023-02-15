import cloudinary, { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

export async function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id: 'test',
        overwrite: true,
        invalidate: true
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if(error) resolve(error);
        resolve(result);
      }
    );
  });
}
