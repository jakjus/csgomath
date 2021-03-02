import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"

// data

const Info = () => (
	<Layout>
		<SEO title="How to" description="How to use CS:GO Math?" />
		<div class="blog-post">
			<h3>how... it works?</h3>
			<p>
				<strong>csgomath</strong> provides calculation of an <i>estimated value</i> of a CS:GO case and key.
			</p>
			<code>Example: If estimated value is 3$, then after 100 case openings, you should get skins of 300$ value.</code>
			<h3>how... can i use it?</h3>
			<p>Website shows how profitable is it to buy chest and key and open it by yourself.</p>
			<p>The <i>higher</i> the profit percentage, the <i>better</i> outcome you will have by <strong>opening the chests</strong>, rather than buying individual items.</p>
			<p>Unluckily, profit tends to be often negative, as the psychologically we are "risk-seekers" in an "unknown prize" scenario.</p>
			<h3>how... is "estimated value" calculated?</h3>
			<p>
				Script processes data in the following order:
				<li>read all cases and keys from market</li>
				<li>match case to key</li>
				<li>get every case description</li>
				<li>search for every item in the description</li>
				<li>get sale price of every item variant (wear/StatTrak)</li>
				<li>calculate the value of single item by processing every item variant</li>
				<li>calculate the value of chest by accumulating item values and known odds</li>
				<li>process data to final shape</li>
			</p>
			<p>
				We are using <i>sale price</i> for our calculation, instead of <i>sell price</i>.</p>
			<p>Sale price is the price, at which item was sold in the past, while sell price is the lowest current offer. </p><p><code>Example: There is an auction of Cool Jakjus Gloves, but it is very rare, so there is only one sell offer - for 10000$. It's quite a lot, considering it was being sold on average for 500$ in the past month. This means, that <i>sell price</i> would be very inaccurate, as it would be 10000$, while <i>sale price</i> stays at 500$.</code></p>
			
			<h3>how... are you?</h3>
			<p>
				I'm fine, thanks.
			</p>
			<hr/>
			<p>
				Please support me and cheer for me.
			</p>
			<p>
				- jakjus
			</p>
		</div>
	</Layout>
);

export default Info;
