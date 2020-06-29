			function f(){
				
				document.getElementById("h1Id").innerHTML ="포도쥬스";
				document.getElementById("h1Id").style.color="white";
				document.getElementById("h1Id").style.backgroundColor="purple";
				document.getElementById("pId").innerHTML = "포도쥬스가 더 맛있을껄?"
				var el = document.getElementsByTagName("p");
				alert("el: " + el);
				el[1].style.color="pink";

				var len = document.getElementsByTagName("p").length;
				alert("len : " + len);
			}