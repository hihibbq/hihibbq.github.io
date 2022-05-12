//gsx method for ignored list
id = '1BrlwpJDJfINkfh_akFqs6XG6XrwEh0vp264QYGrcrmY';
gid = '1047332254';
url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
fetch(url)
  .then(response => response.text())
  .then(data => getIgnoredUserList(data) );
  
var listIgnoredUser = ",";
function getIgnoredUserList(json) {
	json+=""; json=json.trim();
	json = json.substring(47, json.length-2);
	json = JSON.parse(json);
	
	for(var i=0; i < json.table.rows.length; i++) {
		var userName = json.table.rows[i].c[0].v.trim();
		if(userName=="" || userName.length<1) continue;
		if(listIgnoredUser.indexOf(userName) < 0) {
			listIgnoredUser += userName+',';
		}
	}
}  
