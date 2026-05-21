export class FetchError extends Error {
  status: number
  info: unknown

  constructor(message: string, status: number, info: unknown) {
    super(message)
    this.status = status
    this.info = info
  }
}

export async function fetcher<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const res = await fetch(input, init)
  if (!res.ok) {
    const info = await res.json().catch(() => null)
    throw new FetchError(`Request failed: ${res.status}`, res.status, info)
  }
  return res.json() as Promise<T>
}
