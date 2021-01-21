#Users
emma = User.create(email: "emma@test.com", password: "123456")
mark = User.create(email: "mark@test.com", password: "123456")

#Messages
Message.create(body: "Hey everyone!", user: emma)
Message.create(body: "How's it going Emma?", user: mark)