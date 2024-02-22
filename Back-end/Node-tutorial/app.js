function fibonacci () {
    num1 = 0;
    num2 = 1;
    console.log(num1);
    console.log(num2);

    for(i = 1; i <30; i++){
        currentNum = num1 + num2;
        num1 = num2;
        num2 = currentNum;

        console.log(currentNum);
    }
}

fibonacci();