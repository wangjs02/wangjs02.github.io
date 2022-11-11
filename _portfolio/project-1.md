---
title: "Semi-supervised Learning Based on Nadaraya-Watson Estimator"
excerpt: "Capstone project & Research assistant, HKU (Aug 2021 - May 2022)"
collection: portfolio
--- 

## Stage 1
In the first stage, we discussed how **semi-supervised learning (SSL)** could be
used in kernel regression, particularly **Nadaraya-Watson estimator(NW estimator)**.
The method of SSL is powerful in that it not only focuses on predicting the unobserved points, but
also lays emphasis on explore unspecified patterns (Chapelle et al., 2009). This helps
boost the performance of estimators when **labeled data are sparse** and expensive to
collect while unlabeled data can be relatively easily obtained. Under the context of
NW estimator, the classical estimator and the self-supervised estimator using labeled
and unlabeled data are merged into a hybrid estimator. The asymptotic
distribution, **mean square error(MSE)** and **coverage error(CE)** of the hybrid
estimator has been calculated to demonstrate the effectiveness of SSL. Finally,
simulations were carried out to visualize the performance of each estimator. We
showed that the choice of (h, g) is of great importance and the decision
depended largely on the objective of research (**whether we want to optimize for MSE or CE**).

<br/><img src='/images/n=128_comp_1127.png'>

[Download report here](http://wjshku.github.io/files/project1a.pdf)

## Stage 2
In the second stage, a follow-up project has been done to study the asymptotic behavior of **coverage error(CE)**. We successfully found the explicit expression for coverage error and showed that the bandwidth minimizing the order of MSE would **lead to order 1 CE**. We proposed two methods taking advantage of the Berry-Esseen theorem and derived the **minimax** bandwidth for coverage error. This work made the conclusion – that **the selected model for MSE should not be used for CI directly and vice versa** – from stage 1 concrete. We plan to extend the result to a **multivariate case** and publish our findings.

[Download report here](http://wjshku.github.io/files/project1b.pdf)
