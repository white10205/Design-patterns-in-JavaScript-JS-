/* 策略模式定义了一系列的算法，将每个算法封装起来，并使他们可以互相替换
此模式使得算法的变化独立于使用算法的客户端。通过此模式，客户端可以在运行时选择
不同的支付策略，而不必修改客户端代码 */
// 例如ElementUI中的表单验证

//支付策略接口
class PaymentStrategy{
    pay(amount){
        //策略接口
    }
}

//具体支付策略 - 支付宝
class AlipayStrategy extends PaymentStrategy{
    pay(amount){
        console.log(`Paid ${amount} using Alipay`);
    }
}

//具体支付策略 - 微信支付
class WeChatStrategy extends PaymentStrategy{
    pay(amount){
        console.log(`Paid ${amount} using WeChat`);
    }
}

//上下文类,负责接收并执行具体的支付策略
class PaymentContext{
    constructor(strategy){
        this.strategy = strategy
    }
    //设置支付策略
    setPaymentStrategy(strategy){
        this.strategy = strategy
    }

    //执行支付策略
    executePayment(amount){
        this.strategy.pay(amount)
    }
}

//使用策略模式
const paymentContext = new PaymentContext(new AlipayStrategy());
paymentContext.executePayment(1000)

//切换策略模式
paymentContext.setPaymentStrategy(new WeChatStrategy());
paymentContext.executePayment(800)


