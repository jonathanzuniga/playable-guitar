window.onload = function () {
	var s = Snap('#guitar');
	Snap.load('svg/guitarra-int3.svg', function(f) {
		// Add strings
		string1 = f.select('#string1');
		string2 = f.select('#string2');
		string3 = f.select('#string3');
		string4 = f.select('#string4');
		string5 = f.select('#string5');
		string6 = f.select('#string6');

		// Add string hover boxes
		string1box = f.select('#string1box');
		string2box = f.select('#string2box');
		string3box = f.select('#string3box');
		string4box = f.select('#string4box');
		string5box = f.select('#string5box');
		string6box = f.select('#string6box');

		// Add audio tracks
		// source: https://www.freesound.org/people/casualdave/sounds/?page=2
		var audio1 = new Audio('audio/string-101e-low.mp3');
		var audio2 = new Audio('audio/string-201a.mp3');
		var audio3 = new Audio('audio/string-301d.mp3');
		var audio4 = new Audio('audio/string-401g.mp3');
		var audio5 = new Audio('audio/string-501b.mp3');
		var audio6 = new Audio('audio/string-601e.mp3');

		// All string box hover functions                    
		string1box.hover(function() {
				string1.animate({d: 'M87.043,76.458c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
				audio1.pause();
				audio1.currentTime = 0;
			}, function() {
				string1.animate({d: 'M87.043,76.458c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
				audio1.play();
			}
		);

		string1box.touchstart(function(e) {
			string1.animate({d: 'M87.043,76.458c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
			audio1.pause();
			audio1.currentTime = 0;
		});

		string1box.touchend(function(e) {
			e.stopPropagation();
			e.preventDefault();
			string1.animate({d: 'M87.043,76.458c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
			audio1.play();
		});
		
		string2box.hover(function() {
				string2.animate({d: 'M87.043,120.005c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
				audio2.pause();
				audio2.currentTime = 0;
			}, function() {
				string2.animate({d: 'M87.043,120.005c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
				audio2.play();
			}
		);

		string2box.touchstart(function(e) {
			string2.animate({d: 'M87.043,120.005c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
			audio2.pause();
			audio2.currentTime = 0;
		});

		string2box.touchend(function(e) {
			e.stopPropagation();
			e.preventDefault();
			string2.animate({d: 'M87.043,120.005c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
			audio2.play();
		});
		
		string3box.hover(function() {
				string3.animate({d: 'M87.043,163.429c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
				audio3.pause();
				audio3.currentTime = 0;
			}, function() {
				string3.animate({d: 'M87.043,163.429c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
				audio3.play();
			}
		);

		string3box.touchstart(function(e) {
			string3.animate({d: 'M87.043,163.429c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
			audio3.pause();
			audio3.currentTime = 0;
		});

		string3box.touchend(function(e) {
			e.stopPropagation();
			e.preventDefault();
			string3.animate({d: 'M87.043,163.429c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
			audio3.play();
		});
		
		string4box.hover(function() {
				string4.animate({d: 'M87.043,206.854c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
				audio4.pause();
				audio4.currentTime = 0;
			}, function() {
				string4.animate({d: 'M87.043,206.854c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
				audio4.play();
			}
		);

		string4box.touchstart(function(e) {
			string4.animate({d: 'M87.043,206.854c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
			audio4.pause();
			audio4.currentTime = 0;
		});

		string4box.touchend(function(e) {
			e.stopPropagation();
			e.preventDefault();
			string4.animate({d: 'M87.043,206.854c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
			audio4.play();
		});
		
		string5box.hover(function() {
				string5.animate({d: 'M87.043,249.317c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
				audio5.pause();
				audio5.currentTime = 0;
			}, function() {
				string5.animate({d: 'M87.043,249.317c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
				audio5.play();
			}
		);

		string5box.touchstart(function(e) {
			string5.animate({d: 'M87.043,249.317c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
			audio5.pause();
			audio5.currentTime = 0;
		});

		string5box.touchend(function(e) {
			e.stopPropagation();
			e.preventDefault();
			string5.animate({d: 'M87.043,249.317c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
			audio5.play();
		});
		
		string6box.hover(function() {
				string6.animate({d: 'M87.043,294.825c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
				audio6.pause();
				audio6.currentTime = 0;
			}, function() {
				string6.animate({d: 'M87.043,294.825c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
				audio6.play();
			}
		);

		string6box.touchstart(function(e) {
			string6.animate({d: 'M87.043,294.825c190.888,-15,374.144,-13,552.683,0'}, 200, mina.elastic);
			audio6.pause();
			audio6.currentTime = 0;
		});

		string6box.touchend(function(e) {
			e.stopPropagation();
			e.preventDefault();
			string6.animate({d: 'M87.043,294.825c190.888,0,374.144,0,552.683,0'}, 400, mina.elastic);
			audio6.play();
		});

		s.append(f);
	});
};
