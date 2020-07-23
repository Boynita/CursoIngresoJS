function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//var maxResult = 10;
    //var minResult = 1;
    //var randomExamResult = Math.floor(Math.random() * maxResult + minResult);
    //if (randomExamResult >= 9) {
    //alert(" Nota de examen: " + randomExamResult + " Excelente ");
  //} else {
	//if (randomExamResult >= 4) {
		//alert(" Nota de examen: " + randomExamResult + " Aprobo ");
	 // } else {
		//alert(" Nota de examen: " + randomExamResult + " Vamos, la proxima se puede ");
	 // }

	  /**
	   * Calcular dos numero random entre 1 y 51;
	   * a-Si los dos son pares: multiplicarlo. mostrar datos
	   * b-si los dos son impares restarlos. mostrar datos
	   * c-si alguno es divisible por 5 elevarlo al cubo. mostrar datos
	   * d-si no ocurrio ninguno caso anterior mostrar "no paso nada". mostrar datos
	   * e- mostrar todos los resultados en un solo alert
	   * 
	   * 
	   * 
	   * 
	   * 
	   */


		//a
		
		var numeroRandomUno = [2];
		var numeroRandomDos = [10];
		var numerosPares;
		var numeroDivisible = [5];

		numerosPares = Math.floor(Math.random()* numeroRandomUno + numeroRandomDos);
		//c
		numeroDivisible = Math.floor(Math.random()* numeroRandomUno / numeroRandomDos);
		//a
		numerosPares = parseFloat (numeroRandomDos);
		numerosPares = parseFloat (numeroRandomUno);
		numeroDivisible = parseFloat (numeroRandomUno);
		numeroDivisible = parseFloat (numeroRandomDos);

		if (numeroRandomUno %2==0 && numeroRandomDos %2==0){
			alert(numeroRandomUno * numeroRandomDos);
		}
		//c 
		if(numeroRandomUno /5*2*2*2 && numeroRandomDos /5*2*2*2){
			alert(" Resultado " + numeroDivisible);
		}
			
		
		
		console.log(numeroRandomUno + numeroRandomDos);

		//b

		var numeroRandomTres = [5];
		var numeroRandomCuatro = [3];
		var numerosImpares;

		numerosImpares = parseInt (numeroRandomCuatro);
		numerosImpares = parseInt (numeroRandomTres);
		

		numerosImpares = Math.floor(Math.random()* numeroRandomTres + numeroRandomCuatro);

		if (!(numeroRandomTres %2==0 && numeroRandomCuatro %2==0)){
			alert(numeroRandomTres - numeroRandomCuatro);
		}

		
		//d

		if (!!(numeroRandomUno && numeroRandomDos && numeroRandomTres && numeroRandomCuatro)){
			alert("No pasó nada");
		}
		
		

		
		
			






















	   //var numeroUno = 2;
	   //var numeroDos = 8;
	   //var numeroRandom;
	   
	   //numeroRandom = Math.floor(Math.random()* numeroUno + numeroDos);

	   //if (numeroUno % 2 == 0 && numeroDos % 2 == 0){
		//   alert(numeroUno * numeroDos);
	   //}else {
		//if (!(numeroUno % 2 == 0 && numeroDos % 2 == 0) - numeroUno - numeroDos){
		//	alert ("son impares");
		//}
	  // }

		//var numeroRandomUnoAlCubo = Math.pow(numeroRandomUnoAlCubo, 3);
		
		//if (numeroRandomUnoAlCubo / 5 *2*2*2){
			//alert (numeroRandomUnoAlCubo / 5 *2*2*2);
		//}
		
		//if (!(numeroUno && numeroDos && numeroRandomUnoAlCubo)){
		//	alert("No pasó nada");
		//}
		//console.log(numeroRandom && numeroRandomUnoAlCubo);





















		

  }
  



	



//FIN DE LA FUNCIÓN