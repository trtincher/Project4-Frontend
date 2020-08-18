let apiURL;
const apiUrls = {
	production: 'https://immense-springs-44983.herokuapp.com/api',
	development: 'http://localhost:4000/api'
};

if (window.location.hostname === 'localhost') {
	apiURL = apiUrls.development;
} else {
	apiURL = apiUrls.production;
}

export default apiURL;
