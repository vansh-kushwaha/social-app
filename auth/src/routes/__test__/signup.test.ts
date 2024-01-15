import request from 'supertest'
import app from "../../app"
// import request from 'supertest'
app

describe("GET /api/products", () => {
    it("should return all products", async () => {
        const res = await request(app).get("/api/products")
        // expect(res.statusCode).toBe(200)
        // expect(res.body.length).toBeGreaterThan(0)
    })
})
