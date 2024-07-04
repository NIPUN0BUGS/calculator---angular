import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  inputStr: any;

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text : new FormControl()
    })
  }
  

  buttonClick(buttonElemant: any){
    let buttonText = buttonElemant.textContent
    if(this.inputStr.controls.text.value!= null){
      this.inputStr.controls.text.setValue(
      this.inputStr.controls.text.value + buttonText)
    }else{
      this.inputStr.controls.text.setValue(buttonText)
    }
    
  }

  clearDisplay(){
    this.inputStr.controls.text.setValue("")
  }

  calculate(){
    let result = eval(this.inputStr.controls.text.value)
    this.inputStr.controls.text.setValue(result)
  }

  deleteLastCal(){
    let str = this.inputStr.controls.text.value
    str = str.slice(0,-1)
    this.inputStr.controls.text.setValue(str)
  }
}
