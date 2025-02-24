import { put } from '@vercel/blob';
 
export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get('file') as File;

  console.log('hello')
  const blob = await put(file.name, file, {
        access: 'public',
        multipart: true
    });
 
  return Response.json(blob);
}