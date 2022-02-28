import * as React from "react";

const boxShadow = {
  boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05)"
};

export const CardSkeleton = () => {
  return (
    <div style={boxShadow} class="card p-3 mb-4 h-md-250">
    <div class="row no-gutters">

    <div class="col-md-6">
    <div class="row">
    <div
    class="col-4 d-flex align-items-center pr-0 pl-4"
    align="center"
    >
    <div
    style={{display: 'block', height: '60%', width: '100%', color: 'transparent'}}
    class="skeleton">
    image here
    </div>
    </div>

    <div class="col-8">
    <div class="card-body d-flex flex-column align-items-start">
    <span class="d-inline-block mb-2 text-primary">Case</span>
    <h4 class="mb-0">
    <span
    style={{ fontFamily: "DM Serif Display", color: "transparent" }}
    class="skeleton"
    href="#"
    >
    Operation Jakjus Weapon Case
    </span>
    </h4>
    <div class="skeleton mb-1">
    24 hours ago
    </div>
    <p style={{ fontSize: "0.9rem" }} class="skeleton card-text mb-auto">
    Sale Price: $2.22
    </p>
    </div>
    </div>
    </div>
    </div>

    <div class="col-md-6">
    <div class="row">
    <div
    class="col-4 d-flex align-items-center pr-0 pl-4"
    align="center"
    >
    <div
    style={{display: 'block', height: '60%', width: '100%', color: 'transparent'}}
    class="skeleton">
    image here
    </div>
    </div>

    <div class="col-8">
    <div class="card-body d-flex flex-column align-items-start">
    <span class="d-inline-block mb-2 text-success">Key</span>
    <h4 class="mb-0">
    <span
    style={{ fontFamily: "DM Serif Display", color: "transparent" }}
    class="skeleton"
    href="#"
    >
    Operation Jakjus Weapon Case
    </span>
    </h4>
    <div class="skeleton mb-1">
    24 hours ago
    </div>
    <p style={{ fontSize: "0.9rem" }} class="skeleton card-text mb-auto">
    Sale Price: $2.22
    </p>
    </div>
    </div>
    </div>
    </div>



    </div>
    <div class="row no-gutters mt-2">
    <ul class="list-group col">
    <div
    class="link shadhover"
    >
    <li class="bordbot list-group-item d-flex justify-content-between lh-condensed">
    <div>
    <p class="my-0">Total Sale Price</p>
    </div>
    <span class="skeleton">
    $2.22
    </span>
    </li>
    <li class="bordbot list-group-item d-flex justify-content-between lh-condensed">
    <div>
    <p class="my-0">Estimated Value</p>
    </div>
    <span class="skeleton">$2.22</span>
    </li>
    <li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
    <p class="my-0">
    <strong>Case Opening Profit</strong>
    </p>
    </div>
    <span class="skeleton">
    -1.23$
    </span>
    </li>
    </div>
    <div class="link shadhover">
    <li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
    <p class="my-0">
    <strong>Case Opening Profit Ratio</strong>
    </p>
    </div>
    <strong class="skeleton">
    -95%
    </strong>
    </li>
    </div>
    </ul>
    </div>
    </div>
  );
};

export default CardSkeleton;
