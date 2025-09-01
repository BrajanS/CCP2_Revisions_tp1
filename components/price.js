import gpuData from "../dataSets/gpu.js";
import storageData from "../dataSets/storage.js";
import monitorData from "../dataSets/monitor.js";

const products = [gpuData, storageData, monitorData];
const price_container = document.getElementById("price_container");

// #region MAIN Select --------------------------------
const labelProducts = document.createElement("label");
labelProducts.textContent = "Products: ";
labelProducts.setAttribute("for", "selectProducts");

const selectProducts = document.createElement("select");
selectProducts.id = "selectProducts";

// Default Placeholder
const defaultProductPlaceholder = document.createElement("option");
defaultProductPlaceholder.value = "";
defaultProductPlaceholder.textContent = "-- Choose a product --";
selectProducts.appendChild(defaultProductPlaceholder);

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.label;
  option.textContent = product.label;
  selectProducts.appendChild(option);
});

price_container.append(labelProducts, selectProducts);

selectProducts.addEventListener("change", () => {
  const myValue = selectProducts.value;
  if (myValue === "Graphics card") {
    gpuChoices();
  }
  if (myValue === "Storage SSD/NVMe") {
    storageChoices();
  }
  if (myValue === "Monitor") {
    monitorChoices();
  }
});
// #endregion ------------------------------------------

function gpuChoices() {
  const seriesData = gpuData.series;
  // #region cleans duplicates
  const cleanSelectSeries = document.querySelector("#selectSeries");
  const cleanLabelSeries = document.querySelector('label[for="selectSeries"]');
  if (cleanLabelSeries) {
    cleanLabelSeries.remove();
  }
  if (cleanSelectSeries) {
    cleanSelectSeries.remove();
  }
  // #endregion duplicates ---
  // creates new
  const labelSeries = document.createElement("label");
  labelSeries.textContent = "Series: ";
  labelSeries.setAttribute("for", "selectSeries");
  const selectSeries = document.createElement("select");
  selectSeries.id = "selectSeries";
  // Default Series option placeholder
  const seriesDefaultOpt = document.createElement("option");
  seriesDefaultOpt.textContent = "-- Choose the GPU Series --";
  seriesDefaultOpt.value = "";
  selectSeries.appendChild(seriesDefaultOpt);
  // Mapping Options for the select
  for (const serie of Object.keys(seriesData)) {
    const option = document.createElement("option");
    option.textContent = serie;
    option.value = serie;
    selectSeries.appendChild(option);
  }
  price_container.append(labelSeries, selectSeries);
  selectSeries.addEventListener("change", () => {
    if (selectSeries.value !== "") {
      const gpuModels = seriesData[selectSeries.value];
      // #region Cleanup
      const cleanGpuModel = document.querySelector("#selectGpuModel");
      const cleanGpuModelLabel = document.querySelector(
        "label[for=selectGpuModel]"
      );
      if (cleanGpuModel) {
        cleanGpuModel.remove();
      }
      if (cleanGpuModelLabel) {
        cleanGpuModelLabel.remove();
      }
      // #endregion Cleanup

      const labelGpuModel = document.createElement("label");
      labelGpuModel.textContent = "GPU Model: ";
      labelGpuModel.setAttribute("for", "selectGpuModel");

      const selectGpuModel = document.createElement("select");
      selectGpuModel.id = "selectGpuModel";
      // Default Gpu models option
      const gpuModelsDefaultOpt = document.createElement("option");
      gpuModelsDefaultOpt.textContent = "-- Choose the GPU Series --";
      gpuModelsDefaultOpt.value = "";
      selectGpuModel.appendChild(gpuModelsDefaultOpt);
      // Mapping Gpu models options
      for (const [gpuModel, gpuPrice] of Object.entries(gpuModels)) {
        const option = document.createElement("option");
        option.value = gpuPrice;
        option.textContent = gpuModel;
        selectGpuModel.appendChild(option);
      }
      price_container.append(labelGpuModel, selectGpuModel);
      selectGpuModel.addEventListener("change", () => {
        if (selectGpuModel.value !== "") {
          // #region Cleans duplicate Sum spans
          const cleanFinalText = document.querySelector("#priceSum");
          if (cleanFinalText) cleanFinalText.remove();
          // #endregion Cleaning
          // Shows the Sum
          const sumText = document.createElement("span");
          sumText.id = "priceSum";
          sumText.textContent = `Cost: ${selectGpuModel.value}`;
          price_container.appendChild(sumText);

          // #region VARIANTS -----------------------------
          const cleanGpuVariant = document.querySelector("#selectGpuVariant");
          const cleanGpuVariantLabel = document.querySelector(
            "label[for=selectGpuVariant]"
          );
          if (cleanGpuVariant) cleanGpuVariant.remove();
          if (cleanGpuVariantLabel) cleanGpuVariantLabel.remove();

          const labelGpuVariant = document.createElement("label");
          labelGpuVariant.textContent = "Variant: ";
          labelGpuVariant.setAttribute("for", "selectGpuVariant");

          const selectGpuVariant = document.createElement("select");
          selectGpuVariant.id = "selectGpuVariant";

          const gpuVariantDefaultOpt = document.createElement("option");
          gpuVariantDefaultOpt.textContent = "-- Choose the Variant --";
          gpuVariantDefaultOpt.value = "";
          selectGpuVariant.appendChild(gpuVariantDefaultOpt);

          for (const [variantName, variantMultiplier] of Object.entries(
            gpuData.variants
          )) {
            const option = document.createElement("option");
            option.value = variantMultiplier;
            option.textContent = variantName;
            selectGpuVariant.appendChild(option);
          }

          price_container.append(labelGpuVariant, selectGpuVariant);
          // #endregion VARIANTS ---------------------------

          // #region VRAM ----------------------------------
          const cleanGpuVram = document.querySelector("#selectGpuVram");
          const cleanGpuVramLabel = document.querySelector(
            "label[for=selectGpuVram]"
          );
          if (cleanGpuVram) cleanGpuVram.remove();
          if (cleanGpuVramLabel) cleanGpuVramLabel.remove();

          const labelGpuVram = document.createElement("label");
          labelGpuVram.textContent = "VRAM: ";
          labelGpuVram.setAttribute("for", "selectGpuVram");

          const selectGpuVram = document.createElement("select");
          selectGpuVram.id = "selectGpuVram";

          const gpuVramDefaultOpt = document.createElement("option");
          gpuVramDefaultOpt.textContent = "-- Choose the VRAM --";
          gpuVramDefaultOpt.value = "";
          selectGpuVram.appendChild(gpuVramDefaultOpt);

          for (const [vramSize, vramMultiplier] of Object.entries(
            gpuData.vram
          )) {
            const option = document.createElement("option");
            option.value = vramMultiplier;
            option.textContent = vramSize;
            selectGpuVram.appendChild(option);
          }

          price_container.append(labelGpuVram, selectGpuVram);
          // #endregion VRAM -------------------------------
        }
      });
    }
  });
}

function calculateGpuSum() {
  const selectGpuModel = document.querySelector("#selectGpuModel");
  const basePrice = selectGpuModel ? parseFloat(selectGpuModel.value) : null;

  const selectGpuVariant = document.querySelector("#selectGpuVariant");
  const variantMultiplier = selectGpuVariant
    ? parseFloat(selectGpuVariant.value)
    : null;

  const selectGpuVram = document.querySelector("#selectGpuVram");
  const vramMultiplier = selectGpuVram ? parseFloat(selectGpuVram.value) : null;
  // Sum calculation, if i didn't click on variants or vram yet, default is 0
  const sum = basePrice * ((variantMultiplier || 0) + (vramMultiplier || 0));
  return sum;
}

function storageChoices() {
  console.log("Storage");
}

function monitorChoices() {
  console.log("Monitor");
}
