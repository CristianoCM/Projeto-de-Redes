$(document).ready(function(){
	activaTab('ce');
});

function activaTab(tab){
	$('.nav-tabs a[href="#' + tab + '"]').tab('show');
};