async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();
    
    let countValue = result.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        updateApi(countValue)
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        updateApi(countValue)
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
    
}
 const  updateApi = async (newCount) => {
    const response = await fetch("http://localhost:9001/counter", {
        method:"PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            value: newCount
        })
    })
    const result = await response.json();
    console.log(result)
}
updateApi()
main()