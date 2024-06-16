export type ResponseType<T> = {
  error: boolean;
  data?: T[] | T; // Puede ser un array de T o un solo objeto T
  token?: string;
  message: string;
  status: number;
}

