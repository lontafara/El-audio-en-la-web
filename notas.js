//CORRESPONDENCIA DE NOTAS     

		// C
        var C6 = [6, 12, 24];
        var C6a = [6, 12, 25];
        var C6b = [6, 12, 24];
        // C#
        var Cs6 = [13, 19, 26];
        var Cs6a = [13, 19, 27];
        var Cs6b = [13, 19, 25];
        // D	
        var D6 = [7, 14, 27];
        var D6a = [7, 14, 28];
        var D6b = [7, 14, 26];
        var D4 = [7, 14, 27, 55];
        var D4a = [7, 14, 27, 56];
        var D4b = [7, 14, 27, 54];
        // Eb
        var Eb = [7, 14, 29]
        var Eba = [7, 15, 29];
        var Ebaa = [7, 14, 30];
        var Ebaaa = [7, 15, 30];
        var Ebb = [7, 14, 28];
        var Ebbb = [7, 13, 28];
        // E
        var E6 = [8, 15, 31];
        var E6a = [8, 15, 32];
        var E6b = [8, 15, 30];
        var E1 = [15, 31, 61];
        var E1a = [15, 31, 62];
        var E1aa = [15, 32, 62];
        var E1b = [15, 31, 60];
        var E1bb = [15, 30, 60];
        // F
        var F6 = [8, 16, 32];
        var F6b = [8, 16, 31];
        var F6a = [8, 16, 33];
        var F3 = [16, 32, 65]
        var F3b = [16, 32, 64];
        var F3a = [16, 32, 66];
        // F#
        var Fs = [9, 17, 34];
        var Fsa = [9, 17, 35];
        var Fsaa = [9, 17, 36];
        var Fsb = [9, 17, 33];
        var Fsbb = [8, 17, 33];
        //G
        var G = [5, 9, 18, 36];
        var Ga = [5, 9, 18, 37];
        var Gaa = [9, 18, 37];
        var Gb = [5, 9, 18, 35];
        var Gbb = [9, 18, 35];
        //G#
        var Gs = [5, 10, 19, 39];
        var Gsa = [5, 10, 19, 40];
        var Gsaa = [10, 20, 39];
        var Gsb = [5, 10, 19, 38];
        var Gsbb = [10, 18, 38];
        //A
        var A5 = [5, 10, 20, 41];
        var A5b = [5, 10, 20, 40];
        var A5bb = [5, 10, 20, 39];
        var A5a = [5, 10, 20, 42];
        var A5aa = [5, 10, 21, 42];
        var A2 = [10, 20, 41];
        //Bb
        var Bb = [5, 11, 22, 43];
        var BBb = [11, 21, 43];
        var Bbbb = [11, 21, 42];
        var Bba = [5, 11, 22, 44];
        var Bbaa = [11, 22, 43];
        var B2 = [11, 22, 43];
        //B
        var B = [11, 23, 46];
        var Ba = [11, 23, 47];
        var Baa = [11, 24, 47];
        var Bb = [11, 23, 45];
        var Bbb = [11, 22, 45];
        //
function comprobaciones(posiciones){
	            if (comprobar(C6, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'C';
                    (document.querySelector("#C")).className = 'nota_aprox';
                }
                if (comprobar(C6a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'C+';
                    (document.querySelector("#C")).className = 'nota_alta';
                }
                if (comprobar(C6b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-C';
                    (document.querySelector("#C")).className = 'nota_baja';
                }
                //C#
                if (comprobar(Cs6, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'C#';
                    (document.querySelector("#Cs")).className = 'nota_aprox';
                }
                if (comprobar(Cs6a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'C#+';
                    (document.querySelector("#Cs")).className = 'nota_alta';
                }
                if (comprobar(Cs6b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-C#';
                    (document.querySelector("#Cs")).className = 'nota_baja';
                }
                //D
                if (comprobar(D6, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'D';
                    (document.querySelector("#D")).className = 'nota_aprox';
                }
                if (comprobar(D6a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'D+';
                    (document.querySelector("#D")).className = 'nota_alta';
                }
                if (comprobar(D6b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-D';
                    (document.querySelector("#D")).className = 'nota_baja';
                }
                if (comprobar(D4, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'D';
                    (document.querySelector("#D")).className = 'nota_aprox';
                }
                if (comprobar(D4a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'D+';
                    (document.querySelector("#D")).className = 'nota_alta';
                }
                if (comprobar(D4b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-D';
                    (document.querySelector("#D")).className = 'nota_baja';
                }
                //Eb
                if (comprobar(Eb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'Eb';
                    (document.querySelector("#Eb")).className = 'nota_aprox';
                }
                if (comprobar(Eba, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'Eb+';
                    (document.querySelector("#Eb")).className = 'nota_alta';
                }
                if (comprobar(Ebaa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'Eb+';
                    (document.querySelector("#Eb")).className = 'nota_alta';
                }
                if (comprobar(Ebb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-Eb';
                    (document.querySelector("#Eb")).className = 'nota_baja';
                }
                if (comprobar(Ebbb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-Eb';
                    (document.querySelector("#Eb")).className = 'nota_baja';
                }
                //E
                if (comprobar(E6, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'E';
                    (document.querySelector("#E")).className = 'nota_aprox';
                }
                if (comprobar(E6a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'E+';
                    (document.querySelector("#E")).className = 'nota_alta';
                }
                if (comprobar(E6b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-E';
                    (document.querySelector("#E")).className = 'nota_baja';
                }
                if (comprobar(E1, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'E';
                    (document.querySelector("#E")).className = 'nota_aprox';
                }
                if (comprobar(E1a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'E+';
                    (document.querySelector("#E")).className = 'nota_alta';
                }
                if (comprobar(E1aa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'E+';
                    (document.querySelector("#E")).className = 'nota_alta';
                }
                if (comprobar(E1b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-E';
                    (document.querySelector("#E")).className = 'nota_baja';
                }
                if (comprobar(E1bb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-E';
                    (document.querySelector("#E")).className = 'nota_baja';
                }
                //F
                if (comprobar(F6, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'F';
                    (document.querySelector("#F")).className = 'nota_aprox';
                }
                if (comprobar(F6a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'F+';
                    (document.querySelector("#F")).className = 'nota_alta';
                }
                if (comprobar(F6b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-F';
                    (document.querySelector("#F")).className = 'nota_baja';
                }
                if (comprobar(F3, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'F';
                    (document.querySelector("#F")).className = 'nota_aprox';
                }
                if (comprobar(F3a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'F+';
                    (document.querySelector("#F")).className = 'nota_alta';
                }
                if (comprobar(F3b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-F';
                    (document.querySelector("#F")).className = 'nota_baja';
                }
                //F#
                if (comprobar(Fs, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'F#';
                    (document.querySelector("#Fs")).className = 'nota_aprox';
                }
                if (comprobar(Fsa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'F#+';
                    (document.querySelector("#Fs")).className = 'nota_alta';
                }
                if (comprobar(Fsaa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'F#+';
                    (document.querySelector("#Fs")).className = 'nota_alta';
                }
                if (comprobar(Fsb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-F#';
                    (document.querySelector("#Fs")).className = 'nota_baja';
                }
                if (comprobar(Fsbb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-F#';
                    (document.querySelector("#Fs")).className = 'nota_baja';
                }
                //G
                if (comprobar(G, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'G';
                    (document.querySelector("#G")).className = 'nota_aprox';
                }
                if (comprobar(Ga, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'G+';
                    (document.querySelector("#G")).className = 'nota_alta';
                }
                if (comprobar(Gaa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'G+';
                    (document.querySelector("#G")).className = 'nota_alta';
                }
                if (comprobar(Gb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-G';
                    (document.querySelector("#G")).className = 'nota_baja';
                }
                if (comprobar(Gbb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-G';
                    (document.querySelector("#G")).className = 'nota_baja';
                }
                //G#
                if (comprobar(Gs, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'G#';
                    (document.querySelector("#Gs")).className = 'nota_aprox';
                }
                if (comprobar(Gsa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'G#+';
                    (document.querySelector("#Gs")).className = 'nota_alta';
                }
                if (comprobar(Gsaa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'G#+';
                    (document.querySelector("#Gs")).className = 'nota_alta';
                }
                if (comprobar(Gsb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-G#';
                    (document.querySelector("#Gs")).className = 'nota_baja';
                }
                if (comprobar(Gsbb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-G#';
                    (document.querySelector("#Gs")).className = 'nota_baja';
                }
                //A
                if (comprobar(A5, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'A';
                    (document.querySelector("#A")).className = 'nota_aprox';
                }
                if (comprobar(A5a, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'A+';
                    (document.querySelector("#A")).className = 'nota_alta';
                }
                if (comprobar(A5aa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'A+';
                    (document.querySelector("#A")).className = 'nota_alta';
                }
                if (comprobar(A5b, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-A';
                    (document.querySelector("#A")).className = 'nota_baja';
                }
                if (comprobar(A5bb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-A';
                    (document.querySelector("#A")).className = 'nota_baja';
                }
                if (comprobar(A2, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'A';
                    (document.querySelector("#A")).className = 'nota_aprox';
                }
                //Bb
                if (comprobar(Bb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'Bb';
                    (document.querySelector("#Bb")).className = 'nota_aprox';
                }
                if (comprobar(Bba, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'Bb+';
                    (document.querySelector("#Bb")).className = 'nota_alta';
                }
                if (comprobar(Bbaa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'Bb+';
                    (document.querySelector("#Bb")).className = 'nota_alta';
                }
                if (comprobar(BBb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-Bb';
                    (document.querySelector("#Bb")).className = 'nota_baja';
                }
                if (comprobar(Bbbb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-Bb';
                    (document.querySelector("#Bb")).className = 'nota_baja';
                }
                if (comprobar(B2, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'Bb';
                    (document.querySelector("#Bb")).className = 'nota_aprox';
                }
                //B
                if (comprobar(B, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'B';
                    (document.querySelector("#B")).className = 'nota_aprox';
                }
                if (comprobar(Ba, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'B+';
                    (document.querySelector("#B")).className = 'nota_alta';
                }
                if (comprobar(Baa, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = 'B+';
                    (document.querySelector("#B")).className = 'nota_alta';
                }
                if (comprobar(Bb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-B';
                    (document.querySelector("#B")).className = 'nota_baja';
                }
                if (comprobar(Bbb, posiciones) === true) {
                    (document.querySelector(".nota")).innerHTML = '-B';
                    (document.querySelector("#B")).className = 'nota_baja';
                }
	
	
	
	
	}	