function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);

        if (current == to) { 
            clearInterval(timerId);
        } else {
            current++;
        } 
      }, 1000);
    }

printNumbers(1, 10); // 1, 2, 3..., 10

//оце взагалі класна тема, мені пішла легко