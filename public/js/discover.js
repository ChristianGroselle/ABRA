const searchEl = document.querySelector('#searchInput');
const searchBtnEl = document.querySelector('#searchBtn');
const listEl = document.querySelector('#recList');
const prevBtnEl = document.querySelector('#prevBtn');
const nextBtnEl = document.querySelector('#nextBtn');
const saveBtnEl = document.querySelectorAll('.saveBtn');

function testBtn(){
    console.log('test');
    let inputStr = searchEl.value.trim;
    console.log(inputStr);
}

function buildCards(rTitle, rLink, rImg, rTime, rYield, rID){
    let template = `<li>
                        <div class="card-panel offWhite">
                            <div class="row valign-wrapper">
                                <div class="col s4">
                                    <img src="${rImg}" alt="" class="circle responsive-img">
                                </div>
                                <div class="col s8">
                                    <span class="black-text">
                                        <h4>${rTitle}</h4>
                                        <div>
                                            Cooking Time: ${rTime}
                                        </div>
                                        <div>
                                            Feeds: ${rYield}
                                        </div>
                                    </span>
                                </div>
                                </div>
                                <div class="card-action">
                                    <div class="col s4">
                                        <a class="btn waves-effect waves-light left-align" href="${rLink}">Source</a>
                                    </div>
                                    <div class="col s4">
                                        <a class="btn waves-effect waves-light center-align saveBtn" id="${rID}" href="#" data-title="${rTitle}" data-url="${rLink}" data-img="${rImg}" data-time="${rTime}" data-yield="${rYield}" data-id="${rID}" >Save</a>
                                    </div>
                            </div>
                        </div>
                    </li>`;
    listEl.innerHTML += template;
}
//<a class="btn waves-effect waves-light center-align saveBtn" id="${rID}" href="#" data-title="${rTitle}" data-url="${rLink}" data-img="${rImg}" data-time="${rTime}" data-yield="${rYield}" data-id="${rID}" >Save</a>
function searchRecipes(){
    let inputStr = searchEl.value;
    listEl.innerHTML = "";
    
    if(inputStr){
        //let formatedStr = inputStr.replace(/ /g, '%20');
        //console.log(inputStr);
        let fetchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${inputStr}&app_id=aa134e4a&app_key=21cd6c25c3b3eb0bb2958f0c347c4f1b&field=url&field=label&field=images&field=totalTime&field=uri&field=yield`
        currUrl = fetchUrl;
        fetch(fetchUrl)
            .then(function (response) {
             return response.json();
            })
            .then(function (data) {
                console.log(data);
                console.log(data.hits.length);
                  
                for(let i = 0; i < data.hits.length;i++){
                    let title = data.hits[i].recipe.label;
                    let link = data.hits[i].recipe.url;
                    let imgSrc = data.hits[i].recipe.images.SMALL.url;
                    let cTime = data.hits[i].recipe.totalTime;
                    let cYield = data.hits[i].recipe.yield;
                    let npRecId = data.hits[i].recipe.uri;
                    //cuts the recipe id out of the uri
                    let pRecId = npRecId.slice((npRecId.indexOf("recipe_") + 7), npRecId.length);
                    //pRecId += "||";
            
                    if(cTime < 1){
                      cTime = 'N/A';
                    } else {
                      cTime += ' minutes';
                    }
                    if(cYield < 1){
                      cYield = 'N/A';
                    }
                    
                    buildCards(title, link, imgSrc, cTime, cYield, pRecId);
                  }
            });
    } else {
        alert('please add an item to search');
    }


}

function addSavedRecipe(targetEl){
    data = targetEl.dataset;
    let bulkDataObj = {id:data.id, title:data.title, time:data.time, yield:data.yield, url:data.url, img:data.img};
    console.log(bulkDataObj);
}


searchBtnEl.addEventListener('click', searchRecipes);
saveBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(this.dataset.title);
})

//pages on hold for now
// nextBtnEl.addEventListener('click', nextPage);
// prevBtnEl.addEventListener('click', previousPage);

