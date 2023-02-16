//------------------Function to Load Data in Mobile Page------------------------

const mobilePageDataLoad=()=>{

    const xhr = new XMLHttpRequest();
    const filename = localStorage.getItem("page");
    xhr.open("GET",`/JsonFiles/${filename}`,true);
    xhr.onload = function (event) {
        if (this.status === 200) {
            let responseObj = JSON.parse(this.responseText);
            //console.log(responseObj)
            $("#img1").attr("src", `${responseObj.img1}`);
            $("#img2").attr("src", `${responseObj.img2}`);
            $("#img3").attr("src", `${responseObj.img3}`);
            $("#heading").text(`${responseObj.heading}`);
            $("#desc").text(`${responseObj.desc}`);
            $("#tech").text(`${responseObj.tech}`);
            $("#model").text(`${responseObj.model}`);
            $("#scrsize").text(`${responseObj.scrsize}`);
            $("#wc").text(`${responseObj.wc}`);
            $("#os").text(`${responseObj.os}`);
            $("#brand").text(`${responseObj.brand}`);
            $("#price").html( `<sup>&#8360;</sup> ${responseObj.price}`);
            //console.log(responseObj.price)
            
            //Through JavaScript....
            // let list = document.getElementById("list");
            // responseObj.list.forEach((text) => {
                // 	list.innerHTML += `<li>${text}</li>`;
                // });
                
                //Through Jquery
                let list = document.getElementById("list");
                responseObj.list.forEach((text) => {
                    //list.innerHTML += ;
                    $("#list").append(`<li>${text}</li>`);
                });
            }
            else {
                console.log("Some Error Occured")
            }
        }
        xhr.send();
}

//---------Function to Load Data in Laptop Page -------------

const laptopPageDataLoad = () =>{
    const xhr = new XMLHttpRequest;
		const filename = localStorage.getItem("page");
		xhr.open("GET",`/JsonFiles/${filename}`,true);
		xhr.onload =  function (event) {
			if(this.status == 200){
				let responseObj = JSON.parse(this.responseText);
				$("#img1").attr("src",responseObj.img1);
				$("#img2").attr("src", `${responseObj.img2}`);
				$("#img3").attr("src", `${responseObj.img3}`);
				$("#heading").text(`${responseObj.heading}`);
				$("#desc").text(`${responseObj.desc}`);
				$("#tech").text(`${responseObj.tech}`);
				$("#model").text(`${responseObj.model}`);
				$("#scrsize").text(`${responseObj.scrsize}`);
				$("#os").text(`${responseObj.os}`);
				$("#brand").text(`${responseObj.brand}`);
				$("#color").text(`${responseObj.color}`);
				$("#hdsize").text(`${responseObj.hdsize}`);
				$("#ram").text(`${responseObj.ram}`);
				$("#cpu").text(`${responseObj.cpu}`);
				$("#price").html( `<sup>&#8360;</sup> ${responseObj.price}`);
				let list = document.getElementById("list");
				responseObj.list.forEach((text) => {
										//list.innerHTML += ;
					$("#list").append(`<li>${text}</li>`);
				});			
			}			
		}
		xhr.send();
}

//---------Function to Load Data in Television Page------------------

const televisionPageDataLoad = ()=>{
    const xhr = new XMLHttpRequest;
		const filename = localStorage.getItem("page");
		xhr.open("GET",`/JsonFiles/${filename}`,true);
		xhr.onload =  function (event) {
			if(this.status == 200){
				let responseObj = JSON.parse(this.responseText);
				$("#img1").attr("src",responseObj.img1);
				$("#img2").attr("src", `${responseObj.img2}`);
				$("#img3").attr("src", `${responseObj.img3}`);
				$("#heading").text(`${responseObj.heading}`);
				$("#desc").text(`${responseObj.desc}`);
				$("#model").text(`${responseObj.model}`);
				$("#scrsize").text(`${responseObj.scrsize}`);
				$("#brand").text(`${responseObj.brand}`);
				$("#display").text(`${responseObj.display}`);
				$("#resolution").text(`${responseObj.resolution}`);
				$("#mounting").text(`${responseObj.mounting}`);
				$("#price").html( `<sup>&#8360;</sup> ${responseObj.price}`);
				let list = document.getElementById("list");
				responseObj.list.forEach((text) => {
										//list.innerHTML += ;
					$("#list").append(`<li>${text}</li>`);
				});			
			}			
		}
		xhr.send();
}

//----------- Function to Load XML Data in Privacy Policy Page

const privacyDataLoad = () =>{
    $(document).ready(()=>{
        $.ajax({
                    type: "GET",
                    url: "/text-xmlFiles/policy.xml",
                    dataType: "xml",
                    success: function (xml) {
                        $(xml).find("para").each(function(){
                            let para = $(this).text();
                            $("#policyParagraphs").append('<p class="lead">'+ para +'</p>')
                        })
                        $(xml).find('ex').each(function () {
                            let bullet = $(this).text();
                            $("#list").append('<li class="li">' + bullet + '</li>');
                        });
                    }
                });
    })
}