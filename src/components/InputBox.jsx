import { useId } from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
  selectCurrency = "usd",
  className = "",
}) {
  let amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="inline-block mb-2 text-black/40"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => {
            if (e.target.value >= 0)
              onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="flex flex-wrap justify-end w-1/2 text-right">
        <p className="w-full mb-2 text-black/40">Currency Type</p>
        <select
          className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((Currency) => {
            return (
              <option key={Currency} value={Currency}>
                {Currency.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
