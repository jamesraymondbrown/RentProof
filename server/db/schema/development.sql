
INSERT INTO users (name, email, password)
VALUES
('james', 'james@renttracker.com', 123),
('hadley', 'hadley@renttracker.com', 123),
('michael', 'michael@renttracker.com', 123);

INSERT INTO properties (province, city, street_address, postcode)
VALUES
('BC', 'Vancouver', '1115  Nootka Street', 'V5M 3M5'),
('BC', 'Vancouver', '1236 Cordova Street', 'V6B 1E1'),
('BC', 'Vancouver', '2243  Hastings Street', 'V6C 1B4'),
('BC', 'Vancouver', '4308  Keith Road', 'V5T 2C1'),
('BC', 'Vancouver', '1201 Robson St', 'V6B 3K9'),
('BC', 'Vancouver', '952  Tanner Street', 'V5R 2T4'),
('BC', 'Vancouver', '4253  St George Street', 'V5T 1Z7'),
('BC', 'Vancouver', '2565  James Street', 'V5W 3C3'),
('BC', 'Vancouver', '4108  Tolmie St', 'V6B 6L8'),
('BC', 'Vancouver', '4799  Jade St', 'V7T 2W4');

INSERT INTO prices (property_id, user_id, admin_status, date, price, documentation, photo, property_type, square_footage, number_of_bedrooms, number_of_bathrooms)
VALUES
(1, 1, 'approved', '2023-02-02', 1200, 'https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/forms/rtb1_chrome.pdf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvancouverforliving.com%2Ffurnished%2Fvancouver-apartments%2F&psig=AOvVaw1ysF0BbEEP4fkSz4PyvgIm&ust=1675718793700000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjqxY2p__wCFQAAAAAdAAAAABAE', 'apartment', 1000, 2, 1);