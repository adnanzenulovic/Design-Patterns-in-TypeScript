type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

class FetchRequestBuilder {
  private url: string;
  private method: HttpMethod;
  private headers: Headers;
  private body: any;

  constructor(url: string) {
    this.url = url;
    this.method = "GET";
    this.headers = new Headers();
  }

  setMethod(method: HttpMethod): FetchRequestBuilder {
    this.method = method;
    return this;
  }

  setHeader(name: string, value: string): FetchRequestBuilder {
    this.headers.append(name, value);
    return this;
  }

  setBody(body: any): FetchRequestBuilder {
    this.body = body;
    return this;
  }

  async execute(): Promise<Response> {
    const requestOptions: RequestInit = {
      method: this.method,
      headers: this.headers,
    };

    if (this.body) {
      requestOptions.body = JSON.stringify(this.body);
    }

    return await fetch(this.url, requestOptions);
  }
}

// Primer upotrebe FetchRequestBuilder-a
async function run() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  const response = await new FetchRequestBuilder(url)
    .setMethod("GET")
    .setHeader("Content-Type", "application/json")
    .execute();

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.error(`Error: ${response.status}`);
  }
}

run();
