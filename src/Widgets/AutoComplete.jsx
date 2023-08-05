import React, { useRef, useEffect } from "react";

const Autocomplete = () => {
  const mapRef = useRef(null);
  const cardRef = useRef(null);
  const inputRef = useRef(null);
  const biasInputElementRef = useRef(null);
  const strictBoundsInputElementRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 40.749933, lng: -73.98633 },
      zoom: 13,
      mapTypeControl: false,
    });

    const card = cardRef.current;
    const input = inputRef.current;
    const biasInputElement = biasInputElementRef.current;
    const strictBoundsInputElement = strictBoundsInputElementRef.current;
    const options = {
      fields: ["formatted_address", "geometry", "name"],
      strictBounds: false,
    };

    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(card);

    const autocomplete = new window.google.maps.places.Autocomplete(
      input,
      options
    );

    autocomplete.bindTo("bounds", map);

    const infowindow = new window.google.maps.InfoWindow();
    const infowindowContent = document.createElement("div");
    infowindow.setContent(infowindowContent);

    const marker = new window.google.maps.Marker({
      map,
      anchorPoint: new window.google.maps.Point(0, -29),
    });

    autocomplete.addListener("place_changed", () => {
      infowindow.close();
      marker.setVisible(false);

      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      infowindowContent.innerHTML = `
        <div id="infowindow-content">
          <h2 id="place-name">${place.name}</h2>
          <p id="place-address">${place.formatted_address}</p>
        </div>
      `;
      infowindow.open(map, marker);
    });

    function setupClickListener(id, types) {
      const radioButton = document.getElementById(id);

      radioButton.addEventListener("click", () => {
        autocomplete.setTypes(types);
        input.value = "";
      });
    }

    setupClickListener("changetype-all", []);
    setupClickListener("changetype-address", ["address"]);
    setupClickListener("changetype-establishment", ["establishment"]);
    setupClickListener("changetype-geocode", ["geocode"]);
    setupClickListener("changetype-cities", ["(cities)"]);
    setupClickListener("changetype-regions", ["(regions)"]);

    biasInputElement.addEventListener("change", () => {
      if (biasInputElement.checked) {
        autocomplete.bindTo("bounds", map);
      } else {
        autocomplete.unbind("bounds");
        autocomplete.setBounds({
          east: 180,
          west: -180,
          north: 90,
          south: -90,
        });
        strictBoundsInputElement.checked = biasInputElement.checked;
      }
      input.value = "";
    });

    strictBoundsInputElement.addEventListener("change", () => {
      autocomplete.setOptions({
        strictBounds: strictBoundsInputElement.checked,
      });
      if (strictBoundsInputElement.checked) {
        biasInputElement.checked = strictBoundsInputElement.checked;
        autocomplete.bindTo("bounds", map);
      }
      input.value = "";
    });
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
      <div ref={cardRef} id="pac-card">
        <input
          ref={inputRef}
          id="pac-input"
          type="text"
          placeholder="Enter an address"
        />
        {/* Other UI elements */}
      </div>
    </div>
  );
};

export default Autocomplete;
