import { APIRequestContext, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export class HTTPMethodTest {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async GET() {
    const response = await this.request.get(
      `${process.env.BASE_URL}/booking`
    );

    console.log("URL => "+`${process.env.BASE_URL}/booking`);
    expect(response.status()).toBe(200);
    const headers = response.headers();

    expect(headers['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);

    console.log(body);
  }

  async POST(data: Record<string, any>) {
    const resp = await this.request.post(`${process.env.BASE_URL}/booking`,
      {
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
  });
    expect(resp.status()).toBe(200);
    const headers = resp.headers();
    expect(headers['content-type']).toContain('application/json');

  }

  async PUT(data: Record<string, any>, id: number) {
  const resp = await this.request.put(
    `${process.env.BASE_URL}/booking/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':
          'Basic ' + Buffer.from('admin:password123').toString('base64'),
      },
      data,
    }
  );

  expect(resp.status()).toBe(200);
}
  async PATCH(data: Record<string, any>, id: number) {
  const resp = await this.request.patch(
    `${process.env.BASE_URL}/booking/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':
          'Basic ' + Buffer.from('admin:password123').toString('base64'),
      },
      data,
    }
  );

  expect(resp.status()).toBe(200);
}

  async DELETE(id:number) {
    const resp = await this.request.delete(`${process.env.BASE_URL}/booking/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':
          'Basic ' + Buffer.from('admin:password123').toString('base64'),
        }
      }
    );
    expect(resp.status()).toBe(201); 
  }
}
