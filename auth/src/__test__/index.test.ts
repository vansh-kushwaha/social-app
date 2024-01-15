import request from "supertest"
import app from "../app"


it("Chech Whether Server is running", async () => {

    await request(app).get('/').expect(200)

})