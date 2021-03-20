var SUPABASE_URL = "https://feeylixypghiumtqiuco.supabase.co";
var SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDg5OTM4OSwiZXhwIjoxOTMwNDc1Mzg5fQ.-s5U5KCAkc-WaWAzjD3qZoSxCNOpxYZ7vjQ_HaGfF3Q";

// 'https://uiqcrlnqtnmwxkanhomy.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwODQyMTY5MywiZXhwIjoxOTIzOTk3NjkzfQ.EjXCvr6N2Q6-h1sNKpmEDKUnMLr20R5dwEjbeTS0i-0',

var supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.userToken = null;

// read url
const url = window.location.href;
// get jwt
var url = new URL(url_string);
//
var jwt = url.searchParams.get("jwt");
// decode jwt
