# foodtruck
This app provides an API for a Slack app to tell what the food truck of the day is at 2100 Powell St. in Emeryville, CA

## Usage

`POST https://emeryville-food-truck.herokuapp.com/today` to get a Slack-formatted response

`POST https://emeryville-food-truck.herokuapp.com/today` with a payload including `text=menu` to get a Slack-formatted response with that food truck's current menu (if available).
