const str = `
一、	About trading

1、	How to open a position

Build position: also called open position, which means buying or selling a amount of one instrument .
Select a specific instrument in the "market interface" to start trading.
Buy:go long, think the instrument will rise
Sell:go short, think the instrument will fall

2、	How to close a position

Closing a position refers to executing a security transaction that is the exact opposite of an open position, thereby nullifying it and eliminating the initial exposure. Closing a long position in a security would entail selling it, while closing a short position in a security would involve buying it back. Taking offsetting positions in swaps is also very common to eliminate exposure prior to maturity.

Closing position is also known as "position squaring."

3、	How to set target profit/stop losses

When there is a position, you can click:
1. Position page "three points"
2. Market page "pie chart"
3. Double-click the k-line chart to select quick adjustment (drag the target profit/stop-losses line)
The above three ways to set the target profit or stop losses.Or you can set [customize price], [profit and loss ratio] or [profit and loss amount], can also slide adjustment, which is more convenient and quick

When you open a position, you can set the order to target profit/stop losses by setting one of [distance], [profit and loss ratio] or [profit and loss amount], and the other two will be generated automatically.

4、	How to check tading volume

Within the App, find your "profile picture" and click "user name" in the [discovery] interface to view “my trading volume” in the interface of my user level

5、	What is Holding?

Holding is holding a certain amount of one instrument, such as holding 10 gold orders
Users can see details of position holding in the [trading] interface: trading direction, trading quantity, cost price, current price and profit and loss situation

6、	What is Close a position?

Close a position is opposite to Build a position. 
The act of a trader buying or selling an order of the same quantity as his position, but in the opposite direction, to close a position.

7、	What is market order?

Market order: A market order is a request by an investor  to buy or sell a order at the best available price in the current market. 
If you want to buy (sell) stocks (currency pairs, commodities, etc.) immediately, the system will select "market order" by default when placing an order, and then click "buy (sell)" to trade directly

8、	What is limit order?

Limit order:An order to a broker to buy a specified quantity of a security at or below a specified price, or to sell it at or above a specified price (called the limit price). This ensures that user will never pay more for the stock than whatever price is set as his/her limit. This is one of the two most common types of orders, the other being a market order. opposite of no limit order.

9、	What is day order?

Day order:A buy or sell order which automatically expires if it is not executed during that trading session.

10、	What is limit price?

Limit price: buy above the current price and sell below it
Example: the current gold price of $1250 can be entrusted with a limit price of $1245 buying or a limit price of $1255 selling

11、	What is a closed position in force?

When the holding proportion 110% (holding position/total margin) exceeds 10% of the account impairment assumed by the platform on behalf of users, the forced to close rule will be automatically triggered

Open position capital = instrument price * trading quantity/leverage
Total fund = principal + bonus dollars = total fund - holding position 
If you buy 20 units of alibaba with an offer price of $110, that is, the holding capital of 110 (unit price) *20 (quantity) /10 (leverage ratio) = $220. When the holding proportion reaches 110% or above, that is, the total account capital is less than 220/110%= $200 (or the available capital is less than 200-220=$20), you may be forced to close the position

12、	hat is Target-profit and Stop-loss ?

Target-profit: traders close the position right after the account got profits , which is to prevent the reverse of the market led to the withdrawal.
In xswap,Target-profit is equivalent to the system make a single reverse order. xswap uses the precise way of Target-profit.

Stop-loss: traders close the position right after the loss of account,  to prevent the expansion of loss.
In xswap, the Stop-loss is equivalent to the system make a single reverse order.xswap uses the imprecise way of Stop-loss.

13、	What is GTC( Good till Canceled)?

GTC: An order to buy or sell which remains in effect until it is either executed or canceled (although brokers usually set a limit of 30 to 60 days, after which the broker will automatically cancel it or ask the customer if he/she wants to keep it active). also called open order.

14、	What is trend tradingr?

trend trading: This strategy assumes that the value of the stock or commodity will continuously rise over their chosen timeframe
Example: the current price of gold is $1250. You can sell it by pending $1245 or buy it by pending $1255.

15、	trading time

All the trading time is based on GMT +8,through Monday to Friday,and is closed on holiday.

16、	Notes on Target-profit and Stop-loss order

1. Whether opening a position or holding a position, if the user sets only a Target-profit Order or only a Stop-loss Order, then users set another Target-profit Order or Stop-loss Order, if the order is automatically dealed when the first Target-profit Order or Stop-loss Order price is reached,Users shall manually cancel the newly Take-Profit Order or Stop-Loss Order, otherwise the lateset order will be automatically generated.
2. Whether opening a position or holding a position, the user set multiple Limited and Stop for a certain instrument, and manually closed the position before the Target-profit  /Stop-loss price are reached, all Target-profit/Stop-loss orders will be cancelled automatically
3. After clicking "pie chart" on the "market" page at the time of opening a position or "trading" page at the time of holding a position or clicking "three points" on the interface of trading and holding a position and setting Target-profit/Stop-loss, whether manually closing the position or automatically taking profits/stoping losses, the system can automatically cancel invalid orders. However, if there are multiple Target-profit/Stop-loss orders set on this page, users need to manually cancel the invalid orders after the system automatically taking profits/stoping losses or manually closed the position.
4. After opening the "Market" to double-click the K line and select “Quick Adjustment” to set the Target-profit/Stop-loss,be Noticing that: After the user sets the Target-profit/Stop-loss in this interface, the Target-profit/Stop-loss set in other interfaces will be cancelled automatically. If the system successfully completed the Target-profit/Stop-loss order, another order shall be manually deleted from the pending page. Otherwise, if the price of another order reaches,the system will generate one new order.

17、	What is margin?

Select a specific instrument in the "market interface" to start trading.

18、	Why are dealing prices different from market prices?

The spread affects the final price

The spread is the difference between the buying price and the selling price.
xswap uses a floating spread system, in which the fees charged by the platform are changed according to market fluctuations. When the market is relatively flat, the spread is low. The spread is higher when the market hits the big time. When you open a position and close a position,xswap will charge you spread at half.

19、	Leverage ratio of trading products

（放图片）

20、	Why using an imprecise Stop-loss order?

xswap brokerage system adopt the imprecise Stop-loss mode adopted by most brokers, if using the precise Stop-loss mode, when the market is volatile, there is a high probability that the price fluctuation will be too fast to touch the stop loss line, and the price will be skipped directly. In the precise Stop-loss mode, the users' order will not be stopped all the time, which may easily lead to greater loss of the customer and even lead to the account bursting. Therefore, the imprecise stop mode is adopted to ensure that the users' stop order will be completed.

21、	When a loss occurs in a transaction, is it bonus dollars loss or principle loss first?

When there is a loss in the trading, the first reduction is the principal of user's account, when the principal is all consumed, it will begin to consume the bonus dollars.

22、	Why did the cost price change after the position was added?

After adding positions, it shows the average cost price

23、	What is Build position?

Build position: also called open position, which means buying or selling a amount of one instrument .

Buy:go long, think the instrument will rise
Sell:go short, think the instrument will fall

24、	Trading Instruction

In order to ensure the stable operation of the trading system, all users can use resources fairly. We do not support high-frequency trading and non-manual trading. If the system detects, such accounts will be charged according to market fluctuations. xswap is committed to reducing trading costs, providing a fair, stable and transparent trading environment. xswap don't want to charge such fees. Please join us to maintain a good trading environment.

25、	What the time of Asian,European,American

Asian Handicap: 7.00am-3:30pm in summer time (4:30pm in winter time)
European Handicap: 3.30pm (4.30pm) -8.30pm (9.30pm in winter time )
US Handicap: 8.30pm (9.30pm in winter time ) - 7.00am 

26、	How to caculate Open Interest？

Position amount = symbol price * number of transactions / leverage ratio
If you buy 20 Alibaba quoted at $170, the position amount = 170 (unit price) * 20 (quantity) / 10 (leverage) = $ 340

27、	What is break-even profit

In the state of profit, a  target profit is set, and the  target profitprice is higher than the cost price and lower than the current price, so as to protect the earned value-added part, which is usually called "break-even profit".

28、	What is break-even loss

To control the withdrawal of an account by placing a stop-losses with a price lower than the cost price, commonly referred to as a "break-even loss".

二、	Funding and withdrawals

1、	Where would you buy the digital currency?

1）、How to buy a digital currency？

1. Digital currency exchanges (such as currency, Chinese currency, currency security, etc.) and various wallet apps (such as bit, currency, etc.) can quickly purchase digital currency with one click.
2. some digital currency websites can be purchased

2、	How to deposit？

1）、How to deposit into the xswap APP?？

To deposit the xswap app, you must pair it with another wallet app. The Trust wallet APP is used as an example.
1. In the Trust wallet APP, click “+” in the upper right corner to search for PAX. After adding PAX assets, click PAX in the asset list and click “Send”.
2. Copy and paste the deposit address in the user page under the xswap APP deposit page, or “sweep” the deposit QR code.
3. Complete the steps 1 and 2 and complete the deposit.

2）、How to convert USDT to PAX？

Use a third-party app for redemption, such as: Cobo Cloud Wallet, Bitpie App, etc. Click on the APP home page "Currency Exchange" and enter the corresponding amount to complete the redemption.

3、	why limiting funding

1. Protect starters and avoid risks
2. Reduce costs and trading costs

4、	Deposit time

1. PAX instant arrival
2. If USDT is converted to PAX, it will arrive at approximately 17:00 daily.

5、	How to withdraw

1. On the xswap APP page, click on “Withdrawal” and submit the withdrawal request on the withdrawal page.
2. On the PAX Assets page in the third-party wallet app, click “Receive”.
3. Copy the receiving address to the XSwap APP withdrawal page. After checking the corresponding information, click “Export”.
4. Complete steps 1~3 and complete the withdrawal.

6、	What are the conditions for withdrawal?

If it is greater than or equal to 100, you can withdraw.

7、	The time of withdrawing

According to different levels of users, one to three working days to the account, generally within one working day to the account, can be viewed in the "my level" page.

8、	How to rest account

When the principal is negative, in the upper right corner of the deposit interface, "Reset Account"

9、	withdrawl rate

According to the central bank exchange rate, it is calculated based on the real-time dollar against the RMB exchange rate. In the app, find the interface, click on "Avatar" - "Withdrawal" to view the current exchange rate.

10、	Will the loss bigger than the account balance？

NO. At xswap, your maximum loss ends at your account balance. If the account balance falls below the margin requirement, the trading platform will trigger a command to close all open positions.

三、	Spread&Overnight charge

1、	What is the spread

The difference between the current bid and the current ask (in over-the-counter trading) or offered (in exchange trading) of a given security;also called bid/ask spread.

2、	What is the overnight charge

Because xswap uses leveraged trading, allowing small traders to use smaller account balances to obtain larger trading quotas and provide greater value-added probabilities in market, so when users hold positions overnight, they must pay interest on positions. which is Overnight fee.

3、	charge rules for spread

xswap uses a floating spread system, in which the fees charged by the platform are changed according to market fluctuations. When the market is relatively flat, the spread is low. The spread is higher when the market hits the big time. When you open a position and close a position,xswap will charge you spread at half.

4、	charge rules for overnight fee

the triple overnight fee is charged for weekend positions in currencies pairs, Hong Kong stocks, U.S. stocks, indexes and commodities
For positions held before a specific foreign holiday,will double your overnight charge in advance

5、	The relationship between spread and leverage

Take the stock as an example, suppose the spread ratio is 0.3% and the leverage ratio is 1:10, then the spread you need to pay at this time = [1 usd (principal) +9 usd (leverage)] *0.3% (spread)

6、	Timing for charge the overnight fees

Different brokers charge different timing of the overnight fee, in xswap, overnight fee is charged immediately
Summer time: 5 am Beijing time every day
Winter time: 6 am Beijing time every day

7、	popular overnight charges list

（图片）

四、About Account

1、	Real-name authentication

After logging into the account, click "profile picture", then click "real-name authentication", and enter the real name and id number

* note
1. The funding function can only be useing after the real-name authentication is completed
2. Each person can only have one verified real-name account, and multiple accounts are invalid. xswap shall have the right to close the account of the same user who is found to have used multiple accounts for illegal operations

2、	Change the password

APP: you can modify the password according to the steps of "retrieve password"
PC: after logging in the account, select "Personal Settings" and click "modify password" to replace the new password

Forget password: click "Forget Password" on the login page to retrieve password according to the registered mobile phone number/bound email address.
* note: if you enter the wrong password for 5 times in a row, the system will lock your account to ensure the security of your account. You can try again after 1 hour. If you need help, please contact customer service.

3、	Reset the account

Account reset method:
1. After the use of the amount of loss of the bonus dollars, the reset will be triggered and the account will be reset automatically by the system;
Note: each user level is different, so the use of the amount of loss of the bonus dollars is different
2. For users with negative principal, V4 and below, contact customer service to reset the account
3. For users with negative principal, and users with V5 or above can reset their accounts by themselves

* when your account balance is negative, if you deposit crypto currencies at this time, the amount of crypto currencies will fill the negative value of your account. After rest, you need not worry about this situation.

4、	How to increase trading volume？

1. Increase the quantites of single trading
2. Increase the number of trading to increase trading volume

trading volume = number of trades * quantites of single trading

5、	Account management fee

If there is no trading record in the a month, the idle management fee of the account will be $10; If the balance is zero, the account balance will be  $-10 after the payment.
The idle account management fee shall be paid on the second day of every following month.

6、	View account level

Within the app, click  [profile picture] to view the user level

7、	Why does demotion occur?

The level is based on the cumulative trading volume of the last 30 days, and the downgrade rule will be triggered if the trading volume of the last 30 days falls below the minimum trading volume requirement of the level.
Note: v1-v4 will not be degraded

8、	Does the account have an amount of impairment greater than the amount deposited into the account (negative balance)?

No. In xswap, your maximum impairment is placed in your account balance. If the account balance falls below the margin requirement, the trading platform will trigger an order to close all open positions.

五、	About Activities

1、Invite friends

[Personal Center]-[Invite Friends]- "invite friends to make money together" to share with friends

1. You can get a $5 bonus dollars voucher for every friend you successfully invited (after your friend completes the registration). Click "use now" to use the voucher
2. If your friend trading volume reaches $50,000, you can also get $10 funding discount voucher, $10 fee-free voucher and 100% bonus dollars percentage voucher
3. If your friends made into the Top 50 of trading competition, you can get 15pax. 
4. If a friend funds, you can get cash back. 50% of the cash back is bonus dollars + 50% is pax.
5. Friends complete the first four items and you can win a lucky draw. The lowest reward is 200 yuan mobilephone fee, and the highest one is IPhone X
For details, you can check APP activities or consult customer service

2、xswap competition

The competition is xswap's exclusive activities, no registration, all users automatically participate.
Awards:
1. The first prize will be 5000RMB (50% bonus +50% cash)
2. The second prize gets 2000RMB (50% bonus +50% cash)
3. The third prize gets 1000RMB (50% bonus +50% cash)
4. No. 4 to No.10: $50 bonus + xiaomi bracelet
For details, you can check APP activities or consult online customer service

3、Task for getting Bonus dollars

1. Finish Real-name authentication
2. Complete the user data
3. The trading volume reaches $50,000

4、where to view the bonus dollars and return after inviting friends?

Bonus dollars: in the app, click "profile picture" - "my voucher" - , and you can use it immediately
Cash back: click "profile picture" - "invite friends" - to view the accumulated reward history

5、Why didn't you get the bonus dollars after inviting friends?

Each user can invite up to 6 friends per month ,and get a $30 bonus dollars per month.

6、The winning conditions of the competition

In addition to be the top ten, you must meet the following conditions:
1. Account balance ≥ $300 at the end of the competition
2. The number of tradings during the competition is ≥100 times
3. At the end of the competition, the total number of invited friends in the month is ≥ 2
4. Winners must be finished Real-name authentication

For users who use unfair means to participate in competition, xswap has the right to cancel the qualifications and cancel the relevant violations and rewards. The final interpretation of this activity belongs to xswap.

7、	How to calculate the rate of return on the competition?

The users' yield in competition is updated every morning at 5:00 a.m., and the system automatically calculates the user's' yield per natural month

8、	trading competition regulation

（图片）

9、/

Please take the initiative to add  customer service staff's WeChat (15900711260 or 15001721462), and note your appeal
Contact customer service by WeChat,to eceive the gift package upon completion of the audit.

六、	About Bonus dollars

1、	What is Bonus Dollars?

Bonus dollars : It is a unique reward for xswap users. It can be used for trading, helping users to expand the targer-profit possibility of the account, and taking a certain amount of account loss.The profits earned by bonus dollars can be withdrawn;

* according to the level of the users, there are different bonus dollars amount against the account loss, once the biggest amount of bonus dollars amount against the account loss has reached, will automatically trigger the reset.

2、	Bonus dollars against loss?

* according to the level of the users, there are different bonus dollars amount against the account loss, once the biggest amount of bonus dollars amount against the account loss has reached, will automatically trigger the reset.

3、	How to get Bonus dollars

1. New users can get $10 bonus dollars for registration
2. You can get $8 bonus dollars for completing the information
3. You can get $10 bonus dollars if the trading volume reaches $50,000
4.You can redeem points to get bonus dollars vouchers.
5.Invite friends.
6.100% bonus dollars for first time funding.
7.If the funding ≥ $500, you can contact the customer service to get the 100%  bonus dollars voucher.

4、	Task for getting Bonus dollars

1. Finish Real-name authentication
2. Complete the user data
3. The trading volume reaches $50,000

七、	Fundamental Concept

1、	What is leverage?

Leverage allows users to increase their exposure at relatively small expense, with the effect of magnifying profits or losses. Taking the stock trading market as an example, when a securities broker sets the leverage ratio of a stock as 1:10, the client can fund $1 of principal to buy $10 worth of stocks. Through leverage trading, the user is more likely to obtain higher profits. Of course, the increase of yield is accompanied by the increase of investment risks.

2、	What is forex?

Foreign exchange, also known as forex or FX, is the exchange of different currencies on a decentralised global market. 

3、	What is K-line

It comes out with the means of graph for all sorts of stock's every day, every week, every month open quotation price, closing price, highest price, lowest price and its changable condition. The xswap K-lines are presented in the form of a candle chart.

4、	How to read K-line?

A K-line consists of three parts: "entity", "upper" and "lower", forming the K-line. A K-line contains four information: the opening price, the closing price, the highest price of the whole day, and the lowest price of the whole day.

5、	What is opening price?

The opening price is the first dealed trading price of a instrument of each trading day.

6、	What is closing price?

The closing price is the final price of a instrument at the close of the market.

7、	What is currency pairs?

Currency pairs is the exchange rate between one currency and another

8、	What is base currency,what is denomination currency?

In a currency pair, take the GBP/USD currency pair as an example. The first currency,GBP, is called the "base currency". The second currency, USD, is called the "relative currency" or "denominated currency."

9、	What is the major currencies in the currency pairs?

USD
EUR
GBP
JPY
AUD
CAD
NZD
CHY
At present, the dollar, euro, pound, yen and Swiss franc are the five most commonly used settlement currencies in the world.

10、	What is Data quotation?

After the data came out, the relevant currency fluctuations due to the impact of the data.

11、	Factors that will affect the trading

1. Political situation, such as elections and regime change
2. Geopolitics and emergent factors, such as war
3. Economic events, such as the outbreak of economic crisis in emerging countries
4. Interest rate decisions and monetary policies of various countries
5. Balance of payments and foreign exchange reserves
6. Inflation
7. Market expectation

12、	What is majors?

Example: in the foreign exchange market, the exchange rate is based on the us dollar. As the euro against the US dollar and the pound against the US dollar.

13、	What is crosses?

Example: in the foreign exchange market, the exchange rate is based on the us dollar. The relative exchange rates of the two currencies other than the US dollar are known as crosses. As the euro against the pound or the Australian dollar against the yen.

八、	Others

1、	About xswap

The xswap is a diversified social investment platform specially created for individual investors. Users can quickly and conveniently learn about various global trading products through its advanced trading functions. 
 xswap website: http://www.xswap.io

2、	Disclaimer

xswap users (including registered transaction users and website visitors) privately generate money exchanges through the platform (involving the security of interest-related funds), which has nothing to do with xswap.

3、	About lucky red envelope

The red envelope is valid for 48 hours. If it is not collected within the valid period, the remaining money will be returned to the sender's account in the same way. red envelop principal payment: a single limit of $50, each time a maximum of 50 red envelopes, a minimum of 5 red envelopes. Single-day principal red envelop is capped at $100 (there is no single-day limit for red envelop bonuses). * only real-name verified users can give and receive red packets.

4、Risk warning

`

export default str
