import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',

    headers: {
        Authorization: 'Bearer _c8jc9IXQjOgc3zb77Xr1ChyKJIP3tbjIizxKQVo_RZJ8ukqW5OL32V6csW9Ltd-vb-K5PWA7FX6N-9ZevUW7pxY-25O1q0b4NvAns3LijbHsZ0Dp-Nu9RZtfgXcY3Yx'
    }
});

