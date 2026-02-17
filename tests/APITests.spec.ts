import {test, expect} from "@playwright/test";
import { HTTPMethodTest } from "../PageObjects/HTTPMethod.page";

test("Get API Test", async({request})=> {
    const api = new HTTPMethodTest(request);
    await api.GET();
});

test("Post API Test", async({request}) => {
    const api = new HTTPMethodTest(request);
    const data = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast",
    };
    await api.POST(data);
});

test("Put API Testing", async({request})=> {
    const api = new HTTPMethodTest(request);
    const data = {
  "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
};

    await api.PUT(data, 102);
});

test("Patch API Testing", async({request})=> {
    const api = new HTTPMethodTest(request);
    const data = {
        "firstname": "James",
    }
    await api.PATCH(data, 203);
});

test("Delete API Testing", async({request})=> {
    const api = new HTTPMethodTest(request);
    await api.DELETE(201);
})

