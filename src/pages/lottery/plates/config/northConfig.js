/**
 * 【1】plate的类型：
 *     1. 万千十百个的盘
 *     2. 单式盘
 *     3. 串关的盘
 *     4. 鱼虾蟹的盘
 */

export default {
    baozu: {
        baoerxing: {
            description: 'description_baozu_baoerxing',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_baozu_baoerxing_danshi',
                    ruleLen: 2
                }
            }
        },
        baosanxing: {
            description: 'description_baozu_baosanxing',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'baiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_baozu_baosanxing_danshi',
                    ruleLen: 3
                }
            }
        },
        baosixing: {
            description: 'description_baozu_baosixing',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'qianwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'baiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_baozu_baosixing_danshi',
                    ruleLen: 4
                }
            }
        }
    },
    chuanguan: {
        chuaner: {
            description: 'description_chuanguan_chuaner',

            child: {
                fushi: {
                    plateType: 3,
                    arrLen: 2
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_chuanguan_chuaner_danshi',
                    arrLen: 2,
                    ruleLen: 2,
                    isChuanGuan: true
                }
            }
        },
        chuansan: {
            description: 'description_chuanguan_chuansan',

            child: {
                fushi: {
                    plateType: 3,
                    arrLen: 3
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_chuanguan_chuansan_danshi',
                    arrLen: 3,
                    ruleLen: 2,
                    isChuanGuan: true
                }
            }
        }
    },
    tou: {
        erma: {
            description: 'description_tou_erma',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_tou_erma_danshi',
                    ruleLen: 2
                }
            }
        }
    },
    wei: {
        erma: {
            description: 'description_wei_erma',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_wei_erma_danshi',
                    ruleLen: 2
                }
            }
        },
        sanma: {
            description: 'description_wei_sanma',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'baiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_wei_sanma_danshi',
                    ruleLen: 3
                }
            }
        },
        sima: {
            description: 'description_wei_sima',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'qianwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'baiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_wei_sima_danshi',
                    ruleLen: 4
                }
            }
        }
    },
    touwei: {
        erma: {
            description: 'description_touwei_erma',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_touwei_erma_danshi',
                    ruleLen: 2
                }
            }
        }
    },
    yidengjiang: {
        erma: {
            description: 'description_yidengjiang_erma',

            child: {
                fushi: {
                    plateType: 1,
                    arr: [
                        {
                            title: 'shiwei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                        {
                            title: 'gewei',
                            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            actions: ['quan', 'da', 'xiao', 'ji', 'ou', 'qing']
                        },
                    ]
                },
                danshi: {
                    plateType: 2,
                    placeholder: 'placeholder_touwei_erma_danshi',
                    ruleLen: 2
                }
            }
        }
    },
    yuxiaxie: {
        yuxiaxie: {
            description: 'description_yuxiaxie_yuxiaxie',

            child: {
                yuxiaxie: {
                    plateType: 4
                }
            }
        }
    }
};