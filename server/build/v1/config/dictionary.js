const errors = new Map([
    ["23505", { message: "This email is already registered", statusCode: 409 }],
    [
        "42601",
        { message: "Incorrect SQL statement. Check it out", statusCode: 400 },
    ],
    [
        "23502 ",
        { message: "You should enter all the NOT NULL values", statusCode: 400 },
    ],
    ["22P02", { message: "Stick to the correct data types", statusCode: 400 }],
    ["auth_1", { message: "Invalid password or email", statusCode: 401 }],
    ["auth_2", { message: "Authorization header is necessary", statusCode: 401 }],
    ["auth_3", { message: "Invalid token", statusCode: 403 }],
    [
        "auth_4",
        {
            message: "You must enter an email and a password",
            statusCode: 400,
        },
    ],
    [
        "auth_5",
        {
            message: "All fields must be filled in",
            statusCode: 400,
        },
    ],
]);
export { errors };
//
//# sourceMappingURL=dictionary.js.map