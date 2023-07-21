// Model
const model = {
    displayValue: "",
  
    appendToDisplay(value) {
      this.displayValue += value;
    },
  
    calculate() {
      try {
        this.displayValue = eval(this.displayValue).toString();
      } catch (error) {
        this.displayValue = "Error";
      }
    },
  
    clearDisplay() {
      this.displayValue = "";
    },
  
    getDisplayValue() {
      return this.displayValue;
    },
  };
  
  // View
  const view = {
    updateDisplay(value) {
      document.getElementById("display").value = value;
    },
  };
  
  // Controller
  const controller = {
    appendToDisplay(value) {
      model.appendToDisplay(value);
      view.updateDisplay(model.getDisplayValue());
    },
  
    calculate() {
      model.calculate();
      view.updateDisplay(model.getDisplayValue());
    },
  
    clearDisplay() {
      model.clearDisplay();
      view.updateDisplay(model.getDisplayValue());
    },
  };
  
  // 초기화
  view.updateDisplay(model.getDisplayValue());
  