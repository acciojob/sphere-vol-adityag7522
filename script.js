function volume_sphere() {
	const myForm = document.getElementById('MyForm')

	myForm.addEventListener('submit',(event)=>{
		event.preventDefault();
		const radius = parseInt(document.getElementById('radius').value);
		const volume = document.getElementById('volume');
		if(!radius) 
			volume.value = radius;
		else volume.value = 523.5988;
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;